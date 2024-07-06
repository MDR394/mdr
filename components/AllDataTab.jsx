import Image from "next/image"
import web1 from "../public/lifebahn.png"; 
import web2 from "../public/thrillx.io.png";
import web3 from "../public/selfempoweredminds.png"; 
import web4 from "../public/marsha-glauch.de.png"; 
import web5 from "../public/losangelestattooshop.png"; 
import web6 from "../public/musclefuelmeals.png";
import Link from "next/link";

const AllDataTab = () => {
  return (
    <div>
        <section>
      <div className="all grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        <div className="">
            <Link href={"http://lifebahn.org/"}>
        <Image
                className=""
                width={"100%"}
                height={"100%"}
                src={web1}
                alt='img'
              />
              </Link>
        </div>
        <div className="">
        <Link href={"https://thrillx.io/"}>
        <Image
        
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web2}
                alt='img'
              />
              </Link>
        </div>
        <div className="">
        <Link href={"https://selfempoweredminds.com/"}>
        <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web3}
                alt='img'
              />
              </Link>
        </div>
        <div className="">
        <Link href={"https://marsha-glauch.de/"}>
        <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web4}
                alt='img'
              />
              </Link>
        </div>
        <div className="">
        <Link href={"https://losangelestattooshop.com/"}>
        <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web5}
                alt='img'
              />
              </Link>
        </div>
        <div className="">
        <Link href={"https://musclefuelmeals.com/"}>
        <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={web6}
                alt='img'
              />
              </Link>
        </div>
      </div>
      </section>
    </div>
  )
}

export default AllDataTab
