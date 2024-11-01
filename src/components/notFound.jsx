import useDocumentTitle from "../lib/useDocumentTitle"

export default function NotFound() {
    useDocumentTitle('404 | Not Found')
    return (
        <>
            <section className="w-screen h-screen flex items-center justify-center">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
                        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something&apos;s missing.</p>
                        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page. </p>
                        <a href="/" className="inline-flex text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-white my-4">Back to Homepage</a>
                    </div>
                </div>
            </section>
        </>
    )
};
