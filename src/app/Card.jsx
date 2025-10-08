export default function Card({imgSrc, title, description, url}){
    return(
        <>
        <a href={url}>
     <div className="flex flex-col gap-5 p-5 border rounded-2xl">
            <img  className="w-60 aspect-square rounded-xl bg-red-500" />
            <h1> {title} </h1>
            <p> {description}</p>
      </div>
</a>
        </>
    );
}