import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet,ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = (props) => {

    const [term, setTerm] = useState('');
    const[searchApi,results,errorMessgae] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    };
    return (
        <View style={{flex : 1}}>
            <SearchBar 
            term = {term}
            onTermChange = {(newTerm) => setTerm(newTerm)}
            onTermSubmit={() => searchApi(term)}
            
            />
            {errorMessgae ? <Text>{errorMessgae}</Text> : null}
            <ScrollView>
            <ResultsList results={filterResultsByPrice('$')} title="Cost Effective"/>
            <ResultsList results={filterResultsByPrice('$$')} title = "Bit Pricier"/>
            <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender"/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({});

export default SearchScreen;

