import Link from "next/link"



const NotFoundCatchAll = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center space-y-4">
            <h1>
                404 Page not Found
            </h1>
            <p> It seems you've stumbled to somewhere which doesn't exist </p>
            <Link href="/" className="px-4 py-2 rounded-xl bg-bloom-yellow border border-primary hover:-translate-y-1">
                Book a Room
            </Link>
        </div>
    )

}

export default NotFoundCatchAll ;
