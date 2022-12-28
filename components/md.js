const smartquotes = require('smartquotes')
import ReactMarkdown from 'react-markdown'

export const Md = (props) => {
    return (
        <ReactMarkdown 
            components={{
                // open new tab <a href="" target="_blank">
                img: ({ node, ...props }) => <a href={props.src} rel="noreferrer" target="_blank"><img {...props} alt="" style={{ maxWidth: '100%' }} /></a>
            }}>
            {smartquotes.string(props.children)}
        </ReactMarkdown>
    )
}
