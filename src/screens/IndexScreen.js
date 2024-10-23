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

    const { state, addBlogPost, deleteBlogPost } = useContext(Context);

    return (
        <View>
            <Button title="Add Post" onPress={addBlogPost}></Button>
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

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        borderColor: "grey",
        paddingHorizontal: 10,
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24,
    },
});

export default IndexScreen;
