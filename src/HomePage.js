import {useEffect, useState} from "react";
import BlogList from "./BlogList";

const Home  = () => {
    const [blogs, setBlogs] = useState([
        {title: "My new website", body: "lorem ipsum", author: "stef", id: 1},
        {title: "Welcome party", body: "lorem ipsum", author: "dan", id: 2},
        {title: "Web dev top tips ", body: "lorem ipsum", author: "stef", id: 3}
    ]);

    // const [name, setName] = useState("stef");

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log("use effect run");
        // console.log(name);

    }, []);

    return (
        <div className="home">
            <BlogList blogs={ blogs } title = "All Blogs!" handleDelete={ handleDelete }/>
            {/*<BlogList blogs={blogs.filter((blog) => blog.author === "stef")} title = "Stef's Blogs!"/>*/}
            {/*<button onClick={() => setName("luigi")}>change name</button>*/}
            {/*<p>{name}</p>*/}
        </div>
    );
}

export default Home;















