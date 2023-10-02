import{PencilLine} from 'phosphor-react';


export function Sidebar(){
  return (
    <aside className="  bg-slate-800 rounded-lg overflow-hidden" >
      <img className="w-full h-16 object-cover " src="https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"/>
    <div className="flex flex-col items-center justify-center -mt-8 ">
    <img src="https://avatars.githubusercontent.com/u/138774218?v=4" className="h-16 w-16 border-2 border-green-700 rounded-lg " />
      <strong className="mt-4">Joaquim Fernandes</strong>
      <span className="text-gray-400 text-sm">Web developer</span>
    </div>
    <footer className="border-t-2 border-gray-600 w-full h-24 mt-6 p-6 flex items-center justify-center">
    <a className="h-12 border border-green-700 hover:bg-green-700 hover:text-gray-100 rounded-lg w-48 py-4 px-4 flex items-center justify-center text-green-600 font-bold gap-3 transition duration-150" href="#">
        <PencilLine size={20}/>
        Edite seu perfil
        </a>
    </footer>
    </aside>
  )
}

export default Sidebar