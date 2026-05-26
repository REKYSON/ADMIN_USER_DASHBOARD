import { Datagrid, List, ReferenceField ,TextField, FunctionField, EditButton, TextInput, ReferenceInput} from 'react-admin';

const PostList = () => {
    const postFilters=[
        <TextInput source="q" label="search" alwaysOn/>,
        <ReferenceInput source="userId" label="User" reference="users" />];
    return(
    <List filters={postFilters}>
        <Datagrid>
            <TextField source="id"/>   
            <TextField source="title" label="Post Title" />
            <FunctionField label="Excerpt" render={(record) => `${record.body.substring(0,50)}...`}/>
            <ReferenceField source="userId" reference="users" />
            <EditButton/>
        </Datagrid>
    </List>
);
};
export default PostList;