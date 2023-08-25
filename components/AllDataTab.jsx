import Image from "next/image"
import web1 from "../public/web1.png"; 
import web2 from "../public/web2.png";
import web3 from "../public/web3.png"; 
import web4 from "../public/web4.png"; 
import web5 from "../public/web5.png"; 
import web6 from "../public/web6.png";
import Link from "next/link";

const AllDataTab = () => {
  return (
    <div>
        <section>
      <div className="all grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        <div className="bg-slate-600">
            <Link href={"/"}>
        <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web1}
                alt='img'
              />
              </Link>
        </div>
        <div className="bg-slate-600">
        <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web2}
                alt='img'
              />
        </div>
        <div className="bg-slate-600">
        <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web3}
                alt='img'
              />
        </div>
        <div className="bg-slate-600">
        <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web4}
                alt='img'
              />
        </div>
        <div className="bg-slate-600">
        <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web5}
                alt='img'
              />
        </div>
        <div className="bg-slate-600">
        <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web6}
                alt='img'
              />
        </div>
      </div>
      </section>
    </div>
  )
}

export default AllDataTab