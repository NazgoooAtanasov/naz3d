import Section from "./_components/Section";
import ContentHolder from "./_components/ContentHolder";
import Header from "./_components/Header";
import Button from "./_components/Button";
import Summary from "./_components/Summary";
import FileInput from "./_components/FileInput";
import PreviewCard from "./_components/Card";
import UploadFileAndGoToOrder from "./_components/UploadAndOrder";
import ModelPreviewer from "./_components/ModelPreviewer";
import Logo from "./_components/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Section>
        <Header
          head="Unleash Your 3D Printing Creativity"
          description="Upload your STL files and let our expert 3D printing services bring your designs to life."
        >
          <Link
            className="inline-block rounded-md bg-white pb-2 pl-8 pr-8 pt-2 text-black"
            href="#uploadfiles"
          >
            Upload STL File
          </Link>
        </Header>
        <ContentHolder>
          <Logo nameColor="white" />
        </ContentHolder>
      </Section>
      <Section type="secondary">
        <Header
          head="The 3D Printing Process"
          description="Our 3D printing services use the latest technology to bring your designs to life. From file upload to final product, we'll guide you through the entire process."
          centerTexts={true}
          headFontSize="normal"
        />
        <ContentHolder>
          <Summary
            header="Upload STL File"
            description="Start by uploading your 3D design file in the STL format."
          />
          <Summary
            header="Review and Approve"
            description="Our team will review your file and provide a quote. Once approved, we'll begin the printing process."
          />
          <Summary
            header="Receive Your Product"
            description="Your 3D printed product will be shipped to you, ready to use."
          />
        </ContentHolder>
      </Section>
      <Section type="normal" id="uploadfiles">
        <UploadFileAndGoToOrder />
      </Section>
      <Section type="normal">
        <ModelPreviewer />
      </Section>
    </main>
  );
}
