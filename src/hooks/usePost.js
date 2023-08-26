import { useMemo } from "react";


export const  useSortedPost = (posts, sort) => {
    const SortedPost =  useMemo(() => {
        // console.log('отработала')
        if(sort) {
          return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
      }, [sort, posts]
      
    );
    return SortedPost;

}
export const usePost = (posts, sort , query) => {
    const useSortPost = useSortedPost(posts,sort)

    const SortedAndSerchPort = useMemo(() => {
        return useSortPost.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
      }, [query, useSortPost]
    )

    return SortedAndSerchPort;
     
}