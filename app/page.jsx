import Feed from '@components/feed'

const Home = () => {
    return (
        <section className='w-full flex-center flex-col'>
            {/* heading */}
            <h1 className='head_text text-center'>
                Discover and Share
                <br className='max-md:hidden' />
                <span className='orange_gradient text-center' >
                    AI-Powered Prompts
                </span>
            </h1>
            {/* description */}
            <p className='desc text-center'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque provident possimus nesciunt cumque commodi minima quasi repellendus, architecto exercitationem voluptatibus consequuntur, assumenda laudantium natus, ad quas corrupti explicabo aliquam odit.
            </p>

            {/* feed */}
            <Feed />

        </section>
    )
}

export default Home