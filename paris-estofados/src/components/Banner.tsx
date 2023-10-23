import Image from 'next/image';


export default function Banner(){
    return (
        <div>
            <Image alt='imagem' 
            src='https://static.iceaestofados.com.br/banner/1696253823494-084588106157563.webp'
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }} // optional
            />
        </div>
    )
}