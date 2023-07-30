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
    <main className={`flex flex-col items-center p-5 px-10`}>
        <figure className="border-4 border-darkBlue dark:border-lightBlue">
            <Image src={props.imgRoute} alt={altTag} width='300' height='300' className=''/>
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
