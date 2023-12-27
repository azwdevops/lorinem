"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import useSWR from "swr";
import styles from "./page.module.css";
import Image from "next/image";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts/?username=${session?.data?.user?.name}`,
    fetcher
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const description = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          description,
          image,
          content,
          username: session.data?.user?.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {}
  };

  if (session.status === "loading") {
    return <p>Loading...</p>;
  } else if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  } else if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "Loading..."
            : data?.map((post) => (
                <div className={styles.post} key={post?._id}>
                  <div className={styles.imgContainer}>
                    <Image src={post.image} alt="" width={200} height={100} />
                  </div>
                  <h2 className={styles.postTitle}>{post?.title}</h2>
                  <span
                    className={styles.delete}
                    onClick={() => handleDelete(post?._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add new post</h1>
          <input type="text" placeholder="title" className={styles.input} />
          <input
            type="text"
            placeholder="description"
            className={styles.input}
          />
          <input type="text" placeholder="image url" className={styles.input} />
          <textarea
            name=""
            placeholder="Content"
            className={styles.textarea}
          ></textarea>
          <button className={styles.button}>Submit</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
