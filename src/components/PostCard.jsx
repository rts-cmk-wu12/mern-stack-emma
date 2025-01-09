import { Link } from "react-router"

export default function PostCard( { post } ) {

    const style = {
        article: {
            padding: '1rem',
            border: '1px solid black',
            boxShadow: '2px 2px 5px rgba(0,0,0,0.5)',
            gap: '2rem',
            borderRadius: '1rem',
            textAlign: 'center',
        },
        link: {
            color: 'black',
            textDecoration: 'none'
        }

    }

    return (
        <Link to={`post/${post.title}`} style={style.link}>
            <article style={style.article}>
                <h2>{post.title}</h2>
                <p>By {post.author}</p>
                <p>Tags: {post.tags[0]}, {post.tags[1]}, {post.tags[2]}</p>
            </article>

        </Link>
    )
}