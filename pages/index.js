import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Md } from '../components/md'

export default function Home() {
  const description = ""
  const title = "blog of liamz"
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="icon" href="/favicon.ico" />

          {/* Open graph */}
          <meta property="og:type" content="article" />
          <meta property="og:title" content={title} />
          <meta name="og:image" content="https://glissblog.vercel.app/86406FFE-CDC0-4ADC-AF93-B909A03102E1.jpg" />
          <meta property="og:description" content={description} />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@liamzebedee" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content="https://glissblog.vercel.app/86406FFE-CDC0-4ADC-AF93-B909A03102E1.jpg" />
        </Head>
      </Head>

      <header className={styles.header}></header>

      <main className={styles.main}>

        <h1>blog of liamz</h1>

        {/* <h2>ZK</h2>
        <p className={styles.description}>
          <ul>
            <li>
              <Link href="/posts/anatomy-of-a-stark-proof">
                Anatomy of a STARK proof
              </Link>
            </li>
            <li>
              <Link href="/posts/dumb-primer-on-recursive-zk-proofs">
                A dumb primer on recursive ZK proofs
              </Link>
            </li>
            <li>
              <Link href="/posts/loot-fog-of-war-private-information-zk">
                Loot Fog of War, private-information games, and ZK STARK's.
              </Link>
            </li>
          </ul>
        </p> */}
        <p>
          Welcome to my new blog. You can find my old one <a href="https://liamz.co/blog/">here</a>.
        </p>
        <p><strong>Who am I</strong>? {`I'm`} an independent consultant and researcher, specialising in crypto, product design and the forefront of new technology (zero knowledge proofs, blockchains, and a lil bit of generative AI). <Link href="/consulting">See my work</Link>.</p>
        <p><strong>Currently:</strong> consulting, building out ideas (Dappnet, Take), connecting people.</p>
        <p>
          <Link href="/consulting">Consulting</Link> &middot; <a href="https://twitter.com/liamzebedee">Twitter</a> &middot; <a href="https://github.com/liamzebedee">Github</a>
        </p>

        <strong>Blogging.</strong>
<Md>
{`
* [How I found my new house through 6 degrees of separation - a post about path dependence](/posts/how-i-found-my-new-house-thru-6-degrees).
* [I'm a cyborg now! (On Building My Own Artificial Pancreas)](https://liamz.co/blog/im-a-cyborg-now-on-building-my-own-artificial-pancreas/).
* [Empathy](https://liamz.co/blog/empathy-1/).
* [Smoking as expressionism](https://liamz.co/blog/smoking-as-expressionism/).
* [Anti-Social Social Media](https://liamz.co/blog/anti-social-social-media/).
`}
</Md>

<strong>Research</strong>
<Md>
  {`
**Areas of research I'm interested in:**
* Emergent value, [simulacra](https://en.wikipedia.org/wiki/Simulacra_and_Simulation), [mimetic desire](https://eriktorenberg.substack.com/p/the-world-according-to-rene-girard), **low-fidelity**. Examples: [Loot](https://www.lootproject.com/), [Nouns](https://nouns.build/why).
* Memes, remix culture.
* Attention economy.
* [Mimetic gaming](https://hackmd.io/@liamzebedee/r1BqLOfIs).
* P2P reputation, the sybil problem, social signal - PageRank, EigenTrust, Sourecred, [EBSL](https://github.com/liamzebedee/ebsl).
* [Path dependence](http://localhost:3000/posts/how-i-found-my-new-house-thru-6-degrees).
* Prediction markets.
* Generative AI and societal implications for attention/content.
* Consciousness, information theory, ML theory, simulations. Examples: [this](https://www.alignmentforum.org/posts/N2JcFZ3LCCsnK2Fep/the-minimal-latents-approach-to-natural-abstractions), [this](https://www.youtube.com/watch?v=ESXOAJRdcwQ)
* Distributed systems, blockchains, VM's.
  `}
</Md>

<strong>Internet and culture</strong>
<Md>
{`
- [Second-order effects of generative AI and crypto in the next 5yrs.](https://twitter.com/liamzebedee/status/1603195344228974593)
- [Price floor for influence](https://twitter.com/liamzebedee/status/1504247426839769091).
- [Derivatives reveal the power of the original.](https://twitter.com/js_horne/status/1532539708433121280)
- [Stablecoins that are tied to cultural consumption](https://twitter.com/js_horne/status/1574790852907601921)
- [Hardware as the nation state](https://twitter.com/js_horne/status/1528561252951330819).
  - [Every phone with STARK cryptographic coprocessor.](https://twitter.com/dystopiabreaker/status/1519062332243996673)
- [Selling blockspace = bandwidth in the 2000’s](https://twitter.com/VirtualElena/status/1525877890792968192).
`}
</Md>

        <strong>Blockchains &amp; decentralized infrastructure.</strong>
        <Md>
          {`
* [Dappnet: a capture-resistant application network on IPFS and ENS (2022)](https://twitter.com/liamzebedee/status/1578127982173908992)
* [How to measure Polygon's throughput in terms of gas, instead of an opaque metric like TPS? (2022)](https://mirror.xyz/nakamofo.eth/RAS-WkFczcJdgsP_zaynFRPR27aapG79he1eFq2xNag).
* [State sharding using recursive ZK proofs](https://docs.google.com/presentation/d/1pWEXvAH0fdtn-dPWFVHfLd899gJ3qd9d7nap5qh1TSY/edit?usp=sharing)
* [ZBTC: Zero-trust wrapped Bitcoin on Ethereum (2019)](https://twitter.com/liamzebedee/status/1125845911614181377).
          `}
        </Md>

        <strong>{`ZK STARK's, SNARK's and cryptography`}.</strong>
        <Md>
          {`
I contributed to realising an [open-source ZK-STARK prover for Cairo](https://github.com/maxgillett/giza/pull/1) in April 2022. Probably one of my proudest achievements.

* [A technical deep dive into STARK’s, Cairo, and StarkNet’s VM/OS/internals.](https://twitter.com/liamzebedee/status/1515985033856974851)
* [What is the anatomy of a STARK proof?](https://hackmd.io/@liamzebedee/H1ejQCoHj?utm_source=preview-mode&utm_medium=rec)
* [A dumb primer on recursive ZK proofs](https://hackmd.io/@liamzebedee/BydanTDSi)
* [Loot Fog of War, private-information games, and ZK STARK’s.](https://hackmd.io/@liamzebedee/SyV8xDYSj)
          `}
        </Md>

<strong>Mechanism design</strong>
<Md>
{`
* [Aelin multichain tokenomics design](https://liamz.notion.site/Aelin-multichain-tokenomics-design-c22742fb16c04075957ae4e3e9bb0539) - I found this cool, since it implicitly issues benefit to stakers via deflation.
`}
</Md>

<strong>Research projects</strong>
<Md>
{`
* [Goliath](https://glissco.notion.site/Goliath-whitepaper-7cf50163301a42c7b264b02f248a6a07): horizontally scalable decentralized database network, based on recursive ZK proofs and Google's Bigtable. I worked on this from Mar-Aug 2022, before [Polybase](https://polybase.xyz/) was even ready.
* [Gliss: An open-source algorithmic newsfeed.](https://twitter.com/liamzebedee/status/1506979693828141066) - aka the the Attention Market Maker.
* [SugarDAO: the diabetes-collateralised stablecoin](https://docs.google.com/document/d/11tIiI8U5u8_ZFkdbx9mxnlcnMZbJNQdUDmBmky8eTIo/edit?usp=sharing) - okay this one was a bit of a joke hahaha. But I did end up implementing an on-chain SVG that renders my glucose line - aka the Daobetic.
* [TradeUp contract](https://github.com/liamzebedee/loothacks/blob/master/contracts/system/blueprints/TradeUpContract.sol) for Loot - a mechanism from _CS: Go_ that I thought was very interesting for on-chain items.
`}
</Md>

          <strong>Misc</strong>
          <Md>
            {`
**Psychology**

- [Cunningham’s Law. It worked??](https://twitter.com/liamzebedee/status/1504216526039445506)
- [Anchoring](https://twitter.com/emollick/status/1583949061149052928)
`}
          </Md>

      </main>

    </div>
  )
}
