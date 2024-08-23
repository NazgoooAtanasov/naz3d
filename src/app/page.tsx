import Section from "./_components/Section";
import ContentHolder from "./_components/ContentHolder";
import Header from "./_components/Header";
import Button from "./_components/Button";
import Summary from "./_components/Summary";
import FileInput from "./_components/FileInput";
import PreviewCard from "./_components/Card";

export default function Home() {
  return (
    <main>
      <Section>
        <Header
          head="Unleash Your 3D Printing Creativity"
          description="Upload your STL files and let our expert 3D printing services bring your designs to life."
        >
          <Button type="secondary">Upload STL File</Button>
        </Header>
        <ContentHolder>
          <div className="h-[400px] w-[400px] bg-gray-800"></div>
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
      <Section type="normal">
        <Header
          head="Upload Your STL File"
          description="Our 3D printing experts will bring your design to life. Upload your STL file and we'll provide a quote."
        >
          <FileInput />
        </Header>
      </Section>
      <Section type="normal">
        <Header
          head="Preview Your 3D Model"
          description="Upload your STL file and preview it in 3D before placing your order."
        >
          <FileInput />
        </Header>
        <ContentHolder>
          <div className="w-[600px]">
            <PreviewCard
              header="3D Model Preview"
              description="Your uploaded 3D model will be displayed here."
            >
              <div></div>
            </PreviewCard>
          </div>
        </ContentHolder>
      </Section>
    </main>
  );
}
