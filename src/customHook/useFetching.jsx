import axios from "axios";
import { useEffect, useRef, useState } from 'react'
import { FETCH_DATA } from "@/common/errorCode";

export function useFetching(api) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const isMounted = useRef(true);

    const [page, setPage] = useState({
        page: 1,
        pageCount: 1,
        pageSize: 20,
        total: 50,
    });
    const [count, setCount] = useState(0);

    useEffect(() => {
        const controller = new AbortController();
        isMounted.current = true;
        api(page.page, page.pageSize, controller.signal).then(data => {
            if (isMounted.current) {
                setData(data.data);
                setLoading(false);
                setPage({
                    ...data.meta.pagination,
                });
                setError(null);
            }
        }).catch(err => {
            if (!axios.isCancel(err)) {
                if (isMounted.current) {
                    setError(FETCH_DATA);
                    setLoading(false);
                }
            }
        });
        return () => {
            controller.abort();
            isMounted.current = false;
        }
    }, [api, page.page, page.pageSize, count]);

    function loadPage(page, pageSize) {
        setLoading(true);
        setPage(prev => {
            return { ...prev, page: page, pageSize: pageSize }
        })
    }

    function nextPage() {
        if (page.page < page.pageCount) {
            setLoading(true);
            setPage(prev => {
                return { ...prev, page: prev.page + 1 }
            })
        }
    }

    function prevPage() {
        if (page.page > 1) {
            setLoading(true);
            setPage(prev => {
                return { ...prev, page: prev.page - 1 }
            })
        }
    }

    function reload() {
        setLoading(true);
        setCount(count + 1);
    }


    return { data, loading, error, page, loadPage, nextPage, prevPage, reload }
}