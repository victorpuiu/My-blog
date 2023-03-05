import {useEffect, useState} from "react";
import BlogList from "./BlogList";

const Home  = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        setTimeout(() => {
            fetch(" http://localhost:8000/blogs")
                .then(res => {   //res is response object
                    if (!res.ok) {
                        throw Error("could not fetch the data from that resource");
                    }
                    return res.json();  //return and get the data
                })
                .then((data) => {
                    console.log(data);
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                })

        }, 1000);

    }, []);

    return (
        <div className="home">
            { error && <div>{ error }</div> }
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={ blogs } title = "All Blogs!" />}

        </div>
    );
}

export default Home;















