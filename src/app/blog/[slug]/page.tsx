import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Clock, ArrowLeft, ChevronRight } from 'lucide-react'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { Button } from '@/components/ui/button'
import { JsonLd } from '@/components/seo/json-ld'
import { createMetadata } from '@/lib/metadata'
import { articleSchema, breadcrumbSchema } from '@/lib/structured-data'
import { getAllPosts, getPostBySlug, getPostsByCategory } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import { APP_URL, SITE_URL } from '@/lib/constants'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}

  return createMetadata({
    title: post.meta.title,
    description: post.meta.description,
    path: `/blog/${slug}`,
    type: 'article',
    image: post.meta.image,
    publishedTime: post.meta.date,
    modifiedTime: post.meta.updated || post.meta.date,
  })
}

const CATEGORY_COLOURS: Record<string, string> = {
  guides: 'bg-primary-100 text-primary-700 dark:bg-[#0F2C2C] dark:text-[#2BC4C6]',
  news: 'bg-info-light text-info dark:bg-[#1a2332] dark:text-[#63b3ed]',
  product: 'bg-secondary-100 text-secondary-700 dark:bg-[#1e1e38] dark:text-[#a78bfa]',
  legal: 'bg-warning-light text-warning dark:bg-[#2d2410] dark:text-[#f6ad55]',
  safety: 'bg-error-light text-error dark:bg-[#2d1a14] dark:text-[#fc8181]',
  general: 'bg-neutral-100 text-neutral-600 dark:bg-[#1a2332] dark:text-[#a0aec0]',
}

function getCategoryClasses(category: string): string {
  return CATEGORY_COLOURS[category] || CATEGORY_COLOURS.general
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) notFound()

  const { meta, content } = post

  // Get related posts from the same category, excluding the current post
  const categoryPosts = await getPostsByCategory(meta.category)
  const relatedPosts = categoryPosts.filter((p) => p.slug !== slug).slice(0, 3)

  const postUrl = `${SITE_URL}/blog/${slug}`

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: meta.title,
          description: meta.description,
          url: postUrl,
          image: meta.image || `${SITE_URL}/images/og-default.jpg`,
          datePublished: meta.date,
          dateModified: meta.updated || meta.date,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: meta.title, href: `/blog/${slug}` },
        ])}
      />

      <article className="py-16 md:py-24">
        <div className="mx-auto max-w-[720px] px-4 sm:px-6">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--text-tertiary)] hover:text-primary-500 dark:hover:text-[#2BC4C6] transition-colors min-h-[48px]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All posts
          </Link>

          {/* Header */}
          <header className="mt-8 pb-10 border-b border-[var(--border-default)]">
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${getCategoryClasses(meta.category)}`}
            >
              {meta.category}
            </span>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-[2.5rem] leading-[1.15]">
              {meta.title}
            </h1>

            <p className="mt-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              {meta.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[var(--text-tertiary)]">
              <span className="font-medium text-[var(--text-secondary)]">{meta.author}</span>
              <span aria-hidden="true">&middot;</span>
              <time dateTime={meta.date}>{formatDate(meta.date)}</time>
              <span aria-hidden="true">&middot;</span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {meta.readingTime} min read
              </span>
            </div>
          </header>

          {/* Article body */}
          <div className="prose mt-12 max-w-none text-[var(--text-secondary)]">
            <MDXRemote
              source={content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
                },
              }}
            />
          </div>

          {/* Tags */}
          {meta.tags.length > 0 && (
            <div className="mt-12 border-t border-[var(--border-default)] pt-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-3">
                Topics
              </p>
              <div className="flex flex-wrap gap-2">
                {meta.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[var(--bg-secondary)] border border-[var(--border-default)] px-3.5 py-1.5 text-xs font-medium text-[var(--text-secondary)] hover:border-primary-300 dark:hover:border-[#2BC4C6]/40 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="relative bg-[var(--bg-secondary)] py-20 md:py-28 section-wave">
          <div className="section-wave-top" aria-hidden="true">
            <svg
              viewBox="0 0 1440 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <path
                d="M0 48C360 20 720 8 1080 32C1260 44 1380 56 1440 48V0H0V48Z"
                fill="var(--bg-primary)"
              />
            </svg>
          </div>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 dark:text-[#2BC4C6]">
              Keep reading
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[var(--text-primary)]">Related posts</h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group flex flex-col rounded-xl border border-[var(--border-default)] bg-[var(--bg-primary)] shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06),0_4px_8px_rgba(0,0,0,0.03)] hover:border-primary-300 hover:-translate-y-0.5 dark:hover:border-[#2BC4C6]/40"
                >
                  <div className="h-1 rounded-t-xl bg-gradient-to-r from-primary-400 to-primary-500 dark:from-[#2BC4C6] dark:to-primary-500" />
                  <div className="flex flex-1 flex-col p-6">
                    <span
                      className={`self-start inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${getCategoryClasses(related.category)}`}
                    >
                      {related.category}
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)] line-clamp-2 group-hover:text-primary-500 dark:group-hover:text-[#2BC4C6] transition-colors">
                      {related.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                      {related.description}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-[var(--border-default)] pt-4">
                      <div className="flex items-center gap-3 text-xs text-[var(--text-tertiary)]">
                        <time dateTime={related.date}>{formatDate(related.date)}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                          {related.readingTime} min
                        </span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-[var(--text-tertiary)] transition-all group-hover:text-primary-500 group-hover:translate-x-0.5 dark:group-hover:text-[#2BC4C6]" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 dark:from-primary-800 dark:via-primary-700 dark:to-primary-900">
        <div
          className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/5"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-2xl px-4 py-20 text-center sm:px-6 md:py-28">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Ready to try CoRaise?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            Start with the Free plan - no credit card needed. All the tools your family needs in
            one secure platform.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              href={`${APP_URL}/register`}
              variant="secondary"
              size="lg"
              className="border-white bg-white text-primary-700 shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:bg-white/90 dark:border-white dark:bg-white dark:text-primary-700 dark:hover:bg-white/90"
            >
              Get Started Free
            </Button>
            <Button
              href="/features"
              variant="ghost"
              size="lg"
              className="text-white/90 hover:bg-white/10 hover:text-white dark:text-white/90 dark:hover:bg-white/10"
            >
              Explore Features
              <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
