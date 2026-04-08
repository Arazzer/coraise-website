import Link from 'next/link'
import { Clock } from 'lucide-react'
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
      <section className="py-16 md:py-24 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
            Co-Parenting Blog for Australian Families
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)]">
            Guides, news, and insights for separated Australian families.
          </p>
        </div>
      </section>

      {/* Post Grid */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {posts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-xl border border-[var(--border-default)] bg-[var(--bg-primary)] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-200 hover:shadow-[0_4px_6px_rgba(0,0,0,0.07),0_2px_4px_rgba(0,0,0,0.04)] hover:border-primary-300 dark:hover:border-[#2BC4C6]/40"
                >
                  {/* Category badge */}
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${getCategoryClasses(post.category)}`}
                  >
                    {post.category}
                  </span>

                  {/* Title */}
                  <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)] line-clamp-2 group-hover:text-primary-500 dark:group-hover:text-[#2BC4C6] transition-colors">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm text-[var(--text-secondary)] line-clamp-3">
                    {post.description}
                  </p>

                  {/* Meta */}
                  <div className="mt-4 flex items-center gap-3 text-xs text-[var(--text-tertiary)]">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {post.readingTime} min read
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-secondary)] p-12 text-center">
              <p className="text-lg text-[var(--text-secondary)]">
                No posts yet. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
