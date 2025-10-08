import Card from "../Card";

export default function Shop (){
      return (
       <>
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
     
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">    
     
        <Card imgSrc={"next.svg"} url={"/shop/product-1"}title={"Producrt 1"} description={"lorem ipsum"}/>
        <Card imgSrc={"next.svg"} url={"/shop/product-2"}title={"Producrt 2"} description={"lorem ipsum"}/>
        <Card imgSrc={"next.svg"} url={"/shop/product-3"}title={"Producrt 3"} description={"lorem ipsum"}/>
        <Card imgSrc={"next.svg"} url={"/shop/product-4"}title={"Producrt 4"} description={"lorem ipsum"}/>
        <Card imgSrc={"next.svg"} url={"/shop/product-5"}title={"Producrt 5"} description={"lorem ipsum"}/>
        <Card imgSrc={"next.svg"} url={"/shop/product-6"}title={"Producrt 6"} description={"lorem ipsum"}/>
     <a/>
      </main>
    </div>
  </>
  )
  }

