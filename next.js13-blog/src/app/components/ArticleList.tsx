import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticleList = () => {
  return (
    <div>
      <article className="shadow my-4 flex flex-col">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
            alt=""
            width={1280}
            height={300}
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="" className="text-blue-700 pb-4 font-bold">
            Technology
          </Link>
          <Link
            href="#"
            className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
          >
            Next.jsの勉強中
          </Link>
          <p className="txt-sm pb-3 text-slate-900">Published on 2023/10/19</p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            consectetur facere quisquam doloremque, eaque, in sapiente, magnam
            libero repudiandae deserunt beatae et culpa molestias eum. Officia,
            ratione. Velit, adipisci quas?
          </Link>
          <Link href="#" className="text-pink-800 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
      <article className="shadow my-4 flex flex-col">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=2"
            alt=""
            width={1280}
            height={300}
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="" className="text-blue-700 pb-4 font-bold">
            Technology
          </Link>
          <Link
            href="#"
            className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
          >
            Next.jsの勉強中
          </Link>
          <p className="txt-sm pb-3 text-slate-900">Published on 2023/10/19</p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            consectetur facere quisquam doloremque, eaque, in sapiente, magnam
            libero repudiandae deserunt beatae et culpa molestias eum. Officia,
            ratione. Velit, adipisci quas?
          </Link>
          <Link href="#" className="text-pink-800 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
