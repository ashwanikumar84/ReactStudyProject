import CommonStyles from '../Styles/CommonStyles'

const translateProps =(props) => {
    let _styles = {...CommonStyles.default}
    if(props.disable){
        _styles = {..._styles, ...CommonStyles.disable};
    }

    const newProps = {...props, styles1:_styles}
    
    return newProps
}

export default (WrappedComponent) => {
    return function wrappedRender(args){
        console.log(args)
        return WrappedComponent(translateProps(args))
    }
}