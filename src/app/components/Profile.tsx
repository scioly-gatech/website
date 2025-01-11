import Image from "next/image";

type ProfileProps = {
  name: string,
  role: string,
  imgRoute: string,
  color: boolean,
}

export default function Profile(props: ProfileProps) {
  const altTag: string = `Picture of ${props.name}`;

  return (
    <>
      <main className={`flex flex-col items-center p-5 px-10 bg-slate-100 dark:bg-darkBlue rounded-lg shadow-xl mx-8 my-8 hover:opacity-90 hover:transform hover:scale-105 hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] hover:duration-500`}>
      <figure style={{ borderRadius: '50%', height: '150px', width: '150px' }} className="border-4 border-color dark:border-lightBlue">
        <div className="relative h-full w-full">
          <Image
            src={props.imgRoute}
            alt={altTag}
            fill
            style={{ borderRadius: '50%', objectFit:"cover"}}
          />
        </div>
        <figcaption className="sr-only">{altTag}</figcaption>
      </figure>
        <div className={`${props.color ? "bg-lightOrange" : "bg-darkOrange"} mt-2 flex flex-col items-center w-64 border-4 rounded-lg`}>
          <p className="text-xl m-1 rounded-3xl p-1">{props.name}</p>
          <p id='firstRole' className="text-darkBlue p-1/2 text-lg text-center">{props.role}</p>
        </div>
      </main>
    </>
  )
}