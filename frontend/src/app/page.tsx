'use client'

import Image from 'next/image'
import {Button, Card, Navbar} from "flowbite-react";
import React from "react";
import Link from "next/link";

export default function Home() {
    const [posts, setPosts] = React.useState([])
    const effect = () => {
        fetch('https://ddc-web-student.cnm.edu/apis/')
            .then(response => response.json())
            .then((parsedJson) => {
                setPosts(parsedJson.data)
        })
    }
    React.useEffect(effect, [setPosts])

    console.log(posts)
  return (
    <>
      <div className="container mx-auto">
        <div className="div grid col-span-1 md:grid-cols-2 place-items-center p-10">
            {posts.map((post: any, index) => (
                <Card className="max-w-sm" key={index}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {post.title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {post.body}
                    </p>
                </Card>
            ))}
        </div>
      </div>

    </>


  )
}
