import {useEffect, useState} from "react";

const useFetch = (url) => { //custom hooks must begin with word use

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
                .then(res => {   //res is response object
                    if (!res.ok) {
                        throw Error("could not fetch the data from that resource");
                    }
                    return res.json();  //return and get the data
                })
                .then(datas => {
                    setData(datas);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === "AbortError") {
                        console.log("fetch aborted");
                    } else {
                        setIsPending(false);
                        setError(err.message);
                    }
                })

        }, 1000);

        return () => abortCont.abort();

    }, [url]);

    return {data, isPending, error};

}

export default useFetch;