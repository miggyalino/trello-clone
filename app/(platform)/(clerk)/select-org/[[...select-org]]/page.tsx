import { OrganizationList } from "@clerk/nextjs"

const CreateOrganizationList = () => {
  return (
    <OrganizationList 
        hidePersonal
        afterCreateOrganizationUrl='/organization/:id'
        afterSelectOrganizationUrl='/organization/:id'
    />
  )
}

export default CreateOrganizationList