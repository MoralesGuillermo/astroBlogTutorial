
export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function formatDate(date){
    return new Date(date).toLocaleDateString("en-US", {
        timeZone: "UTC",
    });
}


export function formatBlogPosts(posts, {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = undefined

} = {}){
    const filteredPosts = posts.reduce((acc, post) => {
        const {date, draft} = post.frontmatter;
        // Filter out Drafts if true
        if (filterOutDrafts && draft) return acc;
        if (filterOutFuturePosts && new Date(date) > new Date()) return acc;
        // Add the post to the acumulator
        acc.push(post);
        return acc;
    }, [])

    // Sort by Date or randomize
    if (sortByDate){
        filteredPosts.sort((a, b) => 
            new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
    } else{
        filteredPosts.sort(() => Math.random() - 0.5);
    }

    // Limit the posts
    if (typeof limit == "number"){
        return filteredPosts.slice(0, limit);
    }
    return filteredPosts;
}