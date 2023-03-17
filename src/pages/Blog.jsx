import { Link, useLoaderData } from 'react-router-dom';

const Blog = () => {
    const { posts } = useLoaderData(); // este hook es el que hace uso del loader definido más abajo

    return (
      <ul>
          {posts.length > 0 ? (
              posts.map((post) => (
                  <li key={post.id}>
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </li>
              ))
          ) : (
              <li>Ningún post encontrado</li>
          )}
      </ul>
    );
};
export default Blog;

// este loader va a realizar la petición a una api externa para obtener datos que luego se van a consumir en el componente <Blog />
// se debe definir 'loaderBlog' en el archivo de las rutas para que tenga efecto mediante el hook: useLoaderData()
export const loaderBlog = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    return { posts }; // si o si retornar como objeto (tiene que tener { }), { posts } también lo puedo expresar como { posts: posts }
};
