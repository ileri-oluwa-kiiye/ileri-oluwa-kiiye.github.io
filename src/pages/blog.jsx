import { BlogSection } from "../assets/styles";
import Nav from "../comp/LandingPage/nav";
import Footer from "../comp/LandingPage/footer";
import blog1 from "../assets/img/blog1.jpg"
import blog2 from "../assets/img/blog2.jpg"
import blog3 from "../assets/img/blog3.jpg"
import blog4 from "../assets/img/blog4.jpg"
import blog5 from "../assets/img/blog5.jpg"
import blog6 from "../assets/img/blog6.png"
import blog7 from "../assets/img/blog7.png"



const blogPosts = [
    {
      id: 1,
      title: "Introduction to Neural Networks",
      excerpt: "A comprehensive explanation of neural networks, the foundation of deep learning.",
      author: "Ilerioluwakiiye Abolade",
      publication: "AI Mind",
      date: "Jul 14, 2024",
      readTime: "4 min read",
      image: blog1,
      content: "A comprehensive explanation of neural networks, the foundation of deep learning. This article covers the basics of how neural networks work, their architecture, and their applications in modern AI systems.",
      links: [
        {
          text: "Read on Medium",
          url: "https://medium.com/ai-mind-labs/introduction-to-neural-networks-e8afa2ac2e51"
        }
      ]
    },
    {
      id: 2,
      title: "A Review of Top Models from the BraTS-Africa Challenge",
      excerpt: "Advancing Robust Glioma Segmentation across Sub-Saharan MRI Domains",
      author: "Ilerioluwakiiye Abolade",
      // publication: "AI Mind",
      date: "Jun 28, 2024",
      readTime: "6 min read",
      image: blog2,
      content: "An in-depth analysis of the top-performing models from the BraTS-Africa Challenge, focusing on glioma segmentation techniques and their performance across different MRI domains in Sub-Saharan Africa.",
      links: [
        {
          text: "Read on Medium",
          url: "https://medium.com/@ilerioluwakiiye/a-review-of-top-models-from-the-brats-africa-challenge-85e98c6ae7cd"
        }
      ]
    },
    {
      id: 3,
      title: "Dream.",
      excerpt: "…to the one who has stopped believing in themselves.",
      author: "Ilerioluwakiiye Abolade",
      // publication: "Personal Blog",
      date: "Apr 27, 2024",
      readTime: "5 min read",
      image: blog3,
      content: "A personal reflection on dreams, aspirations, and the journey of self-belief. This piece explores the challenges of maintaining hope and motivation in the face of adversity.",
      links: [
        {
          text: "Read on Hashnode",
          url: "https://medium.com/@ilerioluwakiiye/dream-d6452c8ba9d0"
        }
      ]
    },
    {
      id: 4,
      title: "The Deep Learning Indaba through Ilerioluwakiiye's Lens",
      excerpt: "A very detailed summary of my DLI 2024 experience",
      author: "Ilerioluwakiiye Abolade",
      // publication: "Personal Blog",
      date: "Sep 22, 2024",
      readTime: "8 min read",
      image: blog4,
      content: "A comprehensive account of my experience at the Deep Learning Indaba 2024, including insights from workshops, networking opportunities, and the impact on my research journey.",
      links: [
        {
          text: "Read on Hashnode",
          url: "https://medium.com/@ilerioluwakiiye/the-deep-learning-indaba-through-ilerioluwakiiyes-lens-7fac456fee30"
        }
      ]
    },
    {
      id: 5,
      title: "How I won a MacBook from Cardtonic",
      excerpt: "The Upskill Program 1.0",
      author: "Ilerioluwakiiye Abolade",
      // publication: "Personal Blog",
      date: "May 25, 2024",
      readTime: "7 min read",
      image: blog5,
      content: "A detailed account of my participation in Cardtonic's Upskill Program 1.0, the challenges faced, skills learned, and how I secured the MacBook prize through dedication and hard work.",
      links: [
        {
          text: "Read on Hashnode",
          url: "https://medium.com/@ilerioluwakiiye/how-i-won-a-macbook-from-cardtonic-b7285e2f5799"
        }
      ]
    },
    {
      id: 6,
      title: "Data Fetching Made Effortless with RTK Query",
      excerpt: "This article will guide you step-by-step through integrating RTK Query into your project.",
      author: "Ilerioluwakiiye Abolade",
      publication: "Hashnode",
      date: "Nov 2, 2023",
      readTime: "9 min read",
      image: blog6, // <-- add an image variable for this post
      content: "A step-by-step walkthrough of integrating RTK Query into your React project, simplifying data fetching and state management while ensuring efficiency and scalability.",
      links: [
        {
          text: "Read on Hashnode",
          url: "https://ilerioluwakiiye.hashnode.dev/data-fetching-made-effortless-with-rtk-query"
        }
      ]
    },
    {
      id: 7,
      title: "DevRetro2022 - Into The Unknown",
      excerpt: "Although ignorant of the origin, the light at the end of the tunnel remains what draws us and ignites our hope.",
      author: "Ilerioluwakiiye Abolade",
      publication: "Hashnode",
      date: "Dec 28, 2022",
      readTime: "6 min read",
      image: blog7, // <-- add an image variable for this post
      content: "A reflective retrospective of 2022—capturing growth, uncertainty, and the enduring drive to move forward, even when the future remains unknown.",
      links: [
        {
          text: "Read on Hashnode",
          url: "https://ilerioluwakiiye.hashnode.dev/devretro2022"
        }
      ]
    }
  ];

const Blog = () => {
  return (
    <>
      <Nav />
      <BlogSection>
        <div className="blog-header">
          <h1>Blog</h1>
          <p>Thoughts, insights, and experiences from my journey in AI and technology</p>
        </div>
        
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <div className="blog-overlay">
                {post.publication && (
                    <span className="publication-badge">{post.publication}</span>
                )}
                </div>
              </div>
              
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                
                <div className="blog-links">
                  {post.links && post.links.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="blog-link"
                    >
                      Link to Blog
                    </a>
                  ))}
                </div>
                
                <div className="blog-author">
                  <span>By {post.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </BlogSection>
      <Footer />
    </>
  );
};

export default Blog;
