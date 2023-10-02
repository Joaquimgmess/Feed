export function Post(){
  return(
    <article className="bg-slate-800 rounded-lg py-10 px-10">
      <header className="flex items-center justify-between">
        <div className="flex gap-4 items-center">
        <img src="https://avatars.githubusercontent.com/u/138774218?v=4" className="h-16 w-16 border-2 border-green-700 rounded-lg " />
          <div className="flex flex-col itens-center">
            <strong className="">Joaquim Fernandes</strong>
            <span className="text-gray-400 text-sm">Web developer</span>
          </div>
        </div>
        <time title="01/01/2023 10:38" dateTime="2023-10-01 10:38" className="text-gray-400 text-sm">Publicado há 2h</time>
      </header>
      <div>
        <p>Fala galeraa 👋<br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis nesciunt a nihil? Mollitia id rem consectetur, minima ullam aliquam ipsum. Totam architecto reprehenderit esse sit aliquid accusantium quam culpa consequuntur. <br />
        👉 <span className="text-green-700">Joaquim Fernandes</span> <br />
        <span className="text-green-700">#lorem ipsum #lorem ipsum #lorem ipsum</span></p>
        </div>
        <div className="border-t-2 border-gray-600 mt-6 flex flex-col gap-4">
          <strong className="mt-6">Comentários</strong>
          <textarea name="Comentários" className=" h-24 bg-black p-4 border border-green-700 rounded-lg"></textarea>

        </div>
      <a className="h-12 border border-green-700 hover:bg-green-700 hover:text-gray-100 rounded-lg w-24 py-4 px-4 mt-4 flex items-center justify-center text-green-600 font-bold gap-3 transition duration-150" href="#">
        Publicar
        </a>
    </article>
  )
}

export default Post