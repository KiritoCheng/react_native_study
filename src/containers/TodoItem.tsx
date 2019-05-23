import { createFragmentContainer } from 'react-relay';
import { TodoItem } from '../components/test';
import { test } from '../actions/test';

// Export a *new* React component that wraps the original `<TodoItem>`.
export default createFragmentContainer(TodoItem, test);