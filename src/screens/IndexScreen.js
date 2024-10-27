import React, { useContext } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Button,
    TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
    // default props contains a lot, of which navigation is one

    const { state, deleteBlogPost } = useContext(Context);

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("Show", { id: item.id })
                            }
                        >
                            <View style={styles.row}>
                                <Text style={styles.title}>
                                    {item.title} - {item.id}
                                </Text>
                                <TouchableOpacity
                                    onPress={() => deleteBlogPost(item.id)}
                                >
                                    <Feather name="trash" style={styles.icon} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                <Feather name="plus" size={30} style={styles.headerIcon} />
            </TouchableOpacity>
        ),
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        borderColor: "grey",
        paddingHorizontal: 10,
        borderTopWidth: 1,
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24,
    },
    headerIcon: {
        marginRight: 10,
    },
});

export default IndexScreen;
