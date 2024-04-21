import Image from "next/image";
import AboutBird from "@/shared/images/about-bird.jpg";

export function Logo() {
  return (
    <div>
      <Image src={AboutBird} alt="about-bird-image" height={400} width={600} />
    </div>
  );
}
