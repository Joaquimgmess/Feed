export function Sidebar(){
  return (
    <aside className=" h-80 bg-slate-800 rounded-lg overflow-hidden" >
      <img className="w-full h-14 object-cover " src="https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"/>
    <div className="flex flex-col items-center justify-center">
      <strong>Joaquim Fernandes</strong>
      <span>Dev front-end</span>
    </div>
    <footer className="border border-green-600 rounded-lg p-2" >
      <a  href="#">
        Edite seu perfil
        </a>
    </footer>
    </aside>
  )
}

export default Sidebar