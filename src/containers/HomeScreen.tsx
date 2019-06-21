import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { HomeScreen, productsDataProps, productsEventProps } from '../components/HomeScreen';
import { httpGetProductsList } from '../actions/products';
import { reducerTypes } from '../reducers/index';

const maToState: any = (state: reducerTypes) => {
    const { productsList = [] } = state
    console.log(state.productsList)
    return {
        list: productsList
    }
}

const mapToProps = (dispatch: ThunkDispatch<any, any, any>) => {
    return {
        componentDidMount: () => {
            dispatch(httpGetProductsList())
        }
    }
}
export default connect<productsDataProps, productsEventProps, any>(maToState, mapToProps)(HomeScreen)