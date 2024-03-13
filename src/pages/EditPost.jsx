import { useEffect, useState } from "react";

import service from "../appwrite/config";
import { PostFrom, Container } from "../components";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setPosts] = useState(null);
  const { slug } = useParams();
  // console.log(slug);
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        // console.log(post);
        if (post) {
          setPosts(post);
        }
      });
    } else {
      navigate("/");
    }
    // console.log(slug);
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      {console.log(post)}
      <Container>
        <PostFrom post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
