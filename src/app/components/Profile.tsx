import Image from "next/image"
//Defines the types being passed in. For color, if the boolean is true, the color is a dark orange. If the boolean is false, the color is a light orange.
type ProfileProps = {
    name: string,
    role: string,
    imgRoute: string,
    color: boolean,
    info: string,
}

export default function Profile(props: ProfileProps) {

    //Creates an alt tag that can be reused for both the figcaption and alt attribute in the figure element
    const altTag: string = `Picture of ${props.name}`

  return (
    <>
    <main className={`flex flex-col items-center p-5 px-10 bg-slate-100 dark:bg-darkBlue rounded-lg shadow-xl mx-8 my-8 hover:opacity-90 hover:transform hover:scale-105 hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] hover:duration-500`}>
        <figure className="border-4 border-color dark:border-lightBlue rounded-full">
            <Image src={props.imgRoute} alt={altTag} width='300' height='300' className='rounded-full'/>
            <figcaption className="sr-only">{altTag}</figcaption>
        </figure>
        <div className={`${props.color ? "bg-lightOrange" : "bg-darkOrange"} mt-2 flex flex-col items-center w-64 border-4 rounded-lg`}>
        <p className="text-xl m-1 rounded-3xl p-1">{props.name}</p>
        <p id='firstRole' className="text-darkBlue p-1/2 text-lg text-center">{props.role}</p>
        </div>
        
    </main>
    <p id="info" className="hidden">{props.info}</p>
    </>
  )
}
