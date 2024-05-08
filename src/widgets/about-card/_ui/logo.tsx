import Image from "next/image";
import AboutBird from "@/shared/images/about-bird.jpg";

export function Logo() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Image src={AboutBird} alt="about-bird-image" layout="responsive" />
    </div>
  );
}
