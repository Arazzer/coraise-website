import Link from 'next/link'
import { Clock, ArrowRight } from 'lucide-react'
import { JsonLd } from '@/components/seo/json-ld'
import { createMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/structured-data'
import { SITE_URL, COMPANY } from '@/lib/constants'
import { getAllPosts } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'

export const metadata = createMetadata({
  title: 'Blog',
  description:
    'Guides, news, and insights for separated Australian families. Practical advice on co-parenting communication, family law, and raising children across two homes.',
  path: '/blog',
})

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

export default async function BlogPage() {
  const posts = await getAllPosts()
  const [featuredPost, ...remainingPosts] = posts

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
        ])}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'CoRaise Blog',
          description: 'Guides, news, and insights for separated Australian families.',
          url: `${SITE_URL}/blog`,
          publisher: { '@type': 'Organization', name: COMPANY.name },
          inLanguage: 'en-AU',
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--bg-secondary)]">
        <div className="hero-glow absolute -top-32 right-0 bg-primary-200" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 dark:text-[#2BC4C6]">
            Blog
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
            Co-Parenting Insights
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">
            Practical guides, news, and resources for separated Australian families navigating co-parenting.
          </p>
        </div>
        {/* Wave divider */}
        <div className="section-wave-bottom" aria-hidden="true">
          <svg
            viewBox="0 0 1440 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <path
              d="M0 32C360 56 720 48 1080 24C1260 12 1380 16 1440 24V64H0V32Z"
              fill="var(--bg-primary)"
            />
          </svg>
        </div>
      </section>

      {/* Post Grid */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {posts.length > 0 ? (
            <div className="space-y-16">
              {/* Featured Post - First post gets prominence */}
              {featuredPost && (
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="featured-card-border group block rounded-2xl bg-[var(--bg-primary)] p-1"
                >
                  <div className="rounded-[14px] bg-[var(--bg-primary)] p-8 md:p-10">
                    <div className="grid gap-6 md:grid-cols-[1fr_1.5fr] md:items-center">
                      {/* Category image placeholder */}
                      <div className="bg-teal-soft flex aspect-[4/3] items-center justify-center rounded-xl">
                        <div className="text-center">
                          <span
                            className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${getCategoryClasses(featuredPost.category)}`}
                          >
                            {featuredPost.category}
                          </span>
                          <p className="mt-3 text-sm text-[var(--text-tertiary)]">
                            Latest post
                          </p>
                        </div>
                      </div>

                      <div>
                        <h2 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-primary-500 dark:group-hover:text-[#2BC4C6] transition-colors md:text-3xl leading-tight">
                          {featuredPost.title}
                        </h2>
                        <p className="mt-4 text-[var(--text-secondary)] leading-relaxed line-clamp-3 md:line-clamp-4">
                          {featuredPost.description}
                        </p>
                        <div className="mt-6 flex items-center justify-between">
                          <div className="flex items-center gap-3 text-sm text-[var(--text-tertiary)]">
                            <time dateTime={featuredPost.date}>{formatDate(featuredPost.date)}</time>
                            <span aria-hidden="true">&middot;</span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                              {featuredPost.readingTime} min read
                            </span>
                          </div>
                          <span className="hidden items-center gap-1 text-sm font-medium text-primary-500 dark:text-[#2BC4C6] sm:inline-flex">
                            Read more
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              {/* Remaining Posts Grid */}
              {remainingPosts.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-8">
                    All posts
                  </h2>
                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {remainingPosts.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group flex flex-col rounded-xl border border-[var(--border-default)] bg-[var(--bg-primary)] shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06),0_4px_8px_rgba(0,0,0,0.03)] hover:border-primary-300 hover:-translate-y-0.5 dark:hover:border-[#2BC4C6]/40"
                      >
                        {/* Coloured top bar for visual cohesion */}
                        <div className="h-1 rounded-t-xl bg-gradient-to-r from-primary-400 to-primary-500 dark:from-[#2BC4C6] dark:to-primary-500" />

                        <div className="flex flex-1 flex-col p-6">
                          {/* Category badge */}
                          <span
                            className={`self-start inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${getCategoryClasses(post.category)}`}
                          >
                            {post.category}
                          </span>

                          {/* Title */}
                          <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)] line-clamp-2 group-hover:text-primary-500 dark:group-hover:text-[#2BC4C6] transition-colors">
                            {post.title}
                          </h3>

                          {/* Description */}
                          <p className="mt-2 flex-1 text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                            {post.description}
                          </p>

                          {/* Meta */}
                          <div className="mt-5 flex items-center justify-between border-t border-[var(--border-default)] pt-4">
                            <div className="flex items-center gap-3 text-xs text-[var(--text-tertiary)]">
                              <time dateTime={post.date}>{formatDate(post.date)}</time>
                              <span aria-hidden="true">&middot;</span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                                {post.readingTime} min
                              </span>
                            </div>
                            <ArrowRight className="h-4 w-4 text-[var(--text-tertiary)] transition-all group-hover:text-primary-500 group-hover:translate-x-0.5 dark:group-hover:text-[#2BC4C6]" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-secondary)] p-16 text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-primary-400" />
              </div>
              <p className="text-xl font-semibold text-[var(--text-primary)]">
                Coming soon
              </p>
              <p className="mt-2 text-[var(--text-secondary)]">
                We are working on helpful guides for Australian families. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
