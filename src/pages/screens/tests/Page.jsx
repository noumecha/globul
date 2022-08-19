<Stack.Navigator 
    screenOptions = {{
      headerStyle: {
        backgroundColor: '#E42217'
      },
      headerTintColor: '#fff'
    }} 
    initialRouteName='Home'>
    <Stack.Screen 
      name="Home" 
      component={HomeScreen}
      options = {{ title: 'Home' }}
    />
    <Stack.Screen 
      name="Test" 
      component={TestScreen}
      options = {{ title: 'TestPage' }}
    />
    <Stack.Screen 
      name="Details" 
      component={DetailsScreen}
      options = {({route}) => ({
        headerRight: () => {
          return (
            <Button
              title='Buy'
              onPress={() =>{}}
              disabled={route.params.stock === 0}
            />
          )
        }
      })}
    />
    <Stack.Screen 
      name="Login" 
      component={LoginScreen} 
      options = {{ title: 'Login' }}
    />
</Stack.Navigator>