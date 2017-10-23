import material from '../../theme/variables/material';

export default {
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    alignItems: 'center',
    flex: 2
  },
  viewForgotPass: {
    alignItems: 'center',
    width: '100%',
    height: 25,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 50
  },
  forgotPass: {},
  viewInput: {
    width: material.deviceWidth - 80,
    height: 50,
    backgroundColor: '#F7F8FA',
    borderRadius: 25,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 20
  },
  input: {
    flex: 1
  },
  btnLogin: {
    width: material.deviceWidth - 80,
    height: 50,
    backgroundColor: material.bgColor,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginVertical: 15
  },
  checkbox: {
    backgroundColor: material.bgColor
  }
};
