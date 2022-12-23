
import Head from 'next/head';
import Image from 'next/image'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import styles from '../../styles/Home.module.css'
const smartquotes = require('smartquotes')

function Post() {
    // Get [id] param from router.
    const router = useRouter()
    const id = router.query.id

    // Only load if id is available.
    if (!id) {
        return <div>
            <Head>
                <title>123 - blog of liamz</title>
            </Head>
        </div>
    }

    // Load post from file
    // ../posts/${id}.md
    const fileContent = require(`../../posts/${id}.md.json`)
    const title = fileContent.content.split('\n')[0].replace('# ', '')

    // get first 3 lines after title
    const description = fileContent.content.split('\n').slice(1, 4).join(' ')

    return <div className={styles.container}>
      <Head>
        <title>{title} - blog of liamz</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>

    <header className={styles.header}></header>

      <main className={styles.main}>
            <a href="../">{"<< back to posts"}</a>
            <article className={styles.article}>
                <ReactMarkdown 
                    components={{
                        // open new tab <a href="" target="_blank">
                        img: ({ node, ...props }) => <a href={props.src} rel="noreferrer" target="_blank"><img {...props} alt="" style={{ maxWidth: '100%' }} /></a>
                    }}>
                    {smartquotes.string(fileContent.content)}
                </ReactMarkdown>
            </article>
      </main>

    </div>

}

export default Post;