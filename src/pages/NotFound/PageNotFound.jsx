import "./page-not-found.css"

export default function NotFound() {
    return (
        <main className="not-found__content">
            <div className="content_image-zone">
                <h1 className="content__title">Oops!</h1>
                <p className="content__msg">Página não encontrada.</p>
            </div>
        </main>
    )
}
