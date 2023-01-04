
import Head from 'next/head';
import Image from 'next/image'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import styles from '../../styles/Home.module.css'
const smartquotes = require('smartquotes')

// get server side props
export async function getServerSideProps(context) {
    // get [id] param from router
    const id = context.params.id

    // load post from file
    // ../posts/${id}.md
    const fileContent = require(`./$data`).default[id]
    const title = fileContent.content.split('\n')[0].replace('# ', '')

    // get first 3 lines after title
    const description = fileContent.content.split('\n').slice(1, 7).join(' ')

    return {
        props: {
            title,
            description,
            content: fileContent.content,
        },
    }
}


function Post({ title, description, content }) {
    return <div className={styles.container}>
      <Head>
        <title>{title} - blog of liamz</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />

            {/* Open graph */}
            <meta property="og:type" content="article" />
            <meta property="og:title" content={title} />
            <meta name="og:image" content="https://glissblog.vercel.app/86406FFE-CDC0-4ADC-AF93-B909A03102E1.jpg" />
            {description.length && <meta name="og:description" content={description} />}

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@liamzebedee" />
            <meta name="twitter:title" content={title} />
            {description.length && <meta name="twitter:description" content={description} />}
            <meta name="twitter:image" content="https://glissblog.vercel.app/86406FFE-CDC0-4ADC-AF93-B909A03102E1.jpg" />
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
                    {smartquotes.string(content)}
                </ReactMarkdown>
            </article>
      </main>

    </div>

}

export default Post;