import PreviewCard, { Card } from "../_components/Card";
import ContentHolder from "../_components/ContentHolder";
import Header from "../_components/Header";
import Section from "../_components/Section";
import Button from "../_components/Button";
import Select from "../_components/Select";
import Input from "../_components/Input";
import PlaceOrderForm from "./PlaceOrderForm";

export default function Quote() {
  return (
    <PlaceOrderForm>
      <Section type="normal" maxHeight={false}>
        <div className="w-1/2">
          <Header
            head="Print information"
            description="Review the details of your 3D print and create your order. "
            centerChildren={false}
            halfWidth={false}
          />

          <Input
            name="quantity"
            placeholder="Amount of items to print"
            type="number"
            label="Quantity"
          />
          <Select name="material" label="Material" options={["PLA"]} />
          <Select name="color" label="Color" options={["White"]} />
          <Select
            name="infill"
            label="Infill"
            options={["20%", "30%", "40%", "50%", "60%", "70%", "80%", "100%"]}
          />

          <Header
            head="Shipping information"
            description="Review your order and provide your shipping details."
            centerChildren={false}
            halfWidth={false}
          />

          <Input
            name="name"
            placeholder="What is your name?"
            type="text"
            label="Name"
          />
          <Input
            name="address"
            placeholder="Where to ship to?"
            type="text"
            label="Address"
          />
          <div className="flex w-full gap-2">
            <Input name="city" placeholder="City" type="text" label="City" />
            <Input
              name="zipcode"
              placeholder="Zip"
              type="text"
              label="Zip code"
            />
          </div>
          <div className="flex"></div>
        </div>
        <ContentHolder>
          <PreviewCard fullWidth={true} header="Preview your model">
            <div></div>
          </PreviewCard>
          <Card>
            <h2 className="mb-2 text-xl font-bold">Order summary</h2>
            <div className="flex w-full justify-between border-b border-cultured pb-3 pt-3">
              <div>3D Printed Desk Organizer</div>
              <div>$19.99</div>
            </div>
            <div className="w-full border-b border-cultured pb-3 pt-3">
              <div className="flex justify-between">
                <div>Material: PLA</div>
                <div>Color: White</div>
              </div>
              <div className="flex justify-between">
                <div>Infill: 10%</div>
                <div>Quantity: 1</div>
              </div>
            </div>
            <div className="w-full border-b border-cultured pb-3 pt-3">
              <div className="flex justify-between">
                <div>Subtotal: </div>
                <div>$19.99</div>
              </div>
              <div className="flex justify-between">
                <div>Shipping: </div>
                <div>$9.99</div>
              </div>
            </div>
            <div className="w-full pb-3 pt-3 font-bold">
              <div className="flex justify-between">
                <div>Total: </div>
                <div>$30.00</div>
              </div>
            </div>
            <div className="p3 w-full">
              <Button submit={true} className="w-full">
                Place order
              </Button>
            </div>
          </Card>
        </ContentHolder>
      </Section>
    </PlaceOrderForm>
  );
}
