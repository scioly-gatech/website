import Image from "next/image"

type BeeProfileProps = {
  name: string
  role: string
  imgRoute: string
}

export default function BeeProfile({ name, role, imgRoute }: BeeProfileProps) {
  return (
    <div className="flex flex-col items-center text-center">
      
      {/* Bee container */}
      <div className="relative w-48 h-48">
        
        {/* Bee image */}
        <Image
          src="/images/bee.png"
          alt="Bumblebee"
          fill
          className="object-contain"
        />

        {/* Headshot inside bee */}
        <div
          className="
            absolute
            top-[36.5%] left-[23.5%]
            w-[52%] h-[52%]
            rounded-full overflow-hidden
            bg-white
          "
        >
          <Image
            src={imgRoute}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Name & role */}
      <p className="mt-2 font-semibold">{name}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
    </div>
  )
}
