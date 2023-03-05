import {useEffect, useState} from "react";

const useFetch = (url) => { //custom hooks must begin with word use

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        setTimeout(() => {
            fetch(url)
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
                    setIsPending(false);
                    setError(err.message);
                })

        }, 1000);

    }, [url]);

    return {data, isPending, error};

}

export default useFetch;