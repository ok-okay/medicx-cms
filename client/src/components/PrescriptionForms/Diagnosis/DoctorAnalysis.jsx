import FormTemplate from "../FormTemplate";
import PrescriptionContentList from "../PrescriptionContentList";

export default function DoctorAnalysis() {
  return PrescriptionContentList.map((content) => {
    return (
      <FormTemplate
        width={content.width}
        contentHeight={content.contentHeight}
        formHeading={content.formHeading}
        type={content.type}
      />
    );
  });
}
