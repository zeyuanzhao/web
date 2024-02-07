import ProjectPage from "../../../components/ProjectPage";
import Image from "next/image";
import WebsiteBanner from "../../../public/nextjs-banner.png"

const Website = () => {
  return (
    <ProjectPage title="Website" urltitle="website">
      <div className="flex mb-4">
        <p className="basis-2/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut venenatis tellus in. Libero enim sed faucibus turpis in eu mi. Sed egestas egestas fringilla phasellus faucibus. Mauris cursus mattis molestie a. Imperdiet massa tincidunt nunc pulvinar sapien et ligula. Nulla facilisi cras fermentum odio eu feugiat pretium nibh. Velit dignissim sodales ut eu sem integer. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Sagittis id consectetur purus ut faucibus. Orci sagittis eu volutpat odio facilisis mauris sit amet. Sed risus ultricies tristique nulla aliquet enim. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.</p>
        <div className="ml-4 basis-1/3 rounded-lg shadow-2xl overflow-hidden">
          <Image src={WebsiteBanner} alt={""} className="object-cover" />
        </div>
      </div>
      <p>Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Augue eget arcu dictum varius duis at consectetur. Nulla facilisi morbi tempus iaculis urna. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Non tellus orci ac auctor augue mauris augue. Aliquet nec ullamcorper sit amet risus nullam. Varius quam quisque id diam. Massa sed elementum tempus egestas sed sed. Sit amet venenatis urna cursus eget nunc. Pulvinar etiam non quam lacus suspendisse faucibus. Integer vitae justo eget magna fermentum. Vitae auctor eu augue ut. Sed turpis tincidunt id aliquet risus feugiat. Eget nullam non nisi est sit. Est ante in nibh mauris cursus mattis molestie. Etiam tempor orci eu lobortis. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius. Dolor sit amet consectetur adipiscing.</p>
      <p>Senectus et netus et malesuada fames ac turpis. Amet aliquam id diam maecenas ultricies mi eget. Odio tempor orci dapibus ultrices in iaculis nunc. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium. Porttitor eget dolor morbi non arcu risus quis varius. Dolor sit amet consectetur adipiscing elit. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Et malesuada fames ac turpis egestas sed tempus urna et. Ipsum dolor sit amet consectetur adipiscing elit. Pellentesque adipiscing commodo elit at imperdiet. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Aenean vel elit scelerisque mauris pellentesque. In tellus integer feugiat scelerisque varius morbi enim nunc.</p>
    </ProjectPage>
  );
};

export default Website;
